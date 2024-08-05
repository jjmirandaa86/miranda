import { NextResponse } from "next/server";
import pool from "../../libs/mysql";

export async function GET(request, { params }) {
	try {
		const result = await pool.query("SELECT * FROM Client WHERE id = ?", [
			params.id,
		]);
		return NextResponse.json(result[0]);
	} catch (error) {
		return NextResponse.json({ message: error.message });
	}
}

export async function DELETE(request, { params }) {
	try {
		await pool.query("DELETE FROM Client WHERE id = ?", [params.id]);
		return NextResponse.json({}, { status: 204 });
	} catch (error) {
		return NextResponse.json({ message: error.message });
	}
}

export async function PUT(request, { params }) {
	const data = await request.json();

	try {
		await pool.query("UPDATE Client SET ? WHERE id = ?", [data, params.id]);
		return NextResponse.json({
			...data,
			id: params.id,
		});
	} catch (error) {
		return NextResponse.json({ message: error.message });
	}
}
