"use client";

import React, { useMemo, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import { useSelector } from "react-redux";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";

const Grid = ({ data, columns }) => {
	//const [rowData, setRowData] = useState(data);
	const [columnDefs, setColumnDefs] = useState(columns);

	const defaultColDef = useMemo(() => {
		return {
			filter: "agTextColumnFilter",
			floatingFilter: true,
		};
	}, []);

	const {
		variant,
		pagination,
		paginationPageSize,
		paginationPageSizeSelector,
		rowSelection,
	} = useSelector((state) => state.configuration.grid);

	return (
		<div className={variant} style={{ height: 500 }}>
			<AgGridReact
				//rowData={rowData}
				rowData={data}
				columnDefs={columnDefs}
				defaultColDef={defaultColDef}
				//onCellClicked={() => alert((p) => p.Id)}
				suppressServerSideFullWidthLoadingRow={true}
				rowSelection={rowSelection}
				suppressRowClickSelection={true}
				pagination={pagination}
				paginationPageSize={paginationPageSize}
				paginationPageSizeSelector={paginationPageSizeSelector}
			/>
		</div>
	);
};

export default Grid;
