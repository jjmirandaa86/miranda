import { NextResponse } from "next/server";
import pool from "../../libs/mysql";

export async function POST(request) {
	try {
		const { email, passwd } = await request.json();

		const result = await pool.query(
			"Select * from CLient where INTO Client SET ?",
			{
				create_time,
				name,
				address,
				phone,
				email,
				passwd,
				level,
				status,
			},
		);

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

export async function GET() {
	try {
		const results = await pool.query("SELECT * FROM Client");
		return NextResponse.json(results[0]);
	} catch (error) {
		return NextResponse.json(
			{ message: error.message },
			{
				status: 500,
			},
		);
	}
}
