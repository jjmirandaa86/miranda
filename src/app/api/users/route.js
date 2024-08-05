import { NextResponse } from "next/server";
import pool from "../libs/mysql";

export async function GET() {
	try {
		const results = await pool.query("SELECT * FROM Client");
		return NextResponse.json({
			status: 200,
			statusText: "Success",
			data: results[0],
			count: results[0].length,
		});
	} catch (error) {
		return NextResponse.json({
			status: 500,
			statusText: error.message,
			data: [],
			count: 0,
		});
	}
}

export async function POST(request) {
	try {
		const { create_time, name, address, phone, email, passwd, level, status } =
			await request.json();

		const result = await pool.query("INSERT INTO Client SET ?", {
			create_time,
			name,
			address,
			phone,
			email,
			passwd,
			level,
			status,
		});

		return NextResponse.json({
			create_time,
			name,
			address,
			phone,
			email,
			passwd,
			level,
			status,
			id: result.insertId,
		});
	} catch (error) {
		return NextResponse.json(
			{ message: error.message },
			{
				status: 500,
			},
		);
	}
}
