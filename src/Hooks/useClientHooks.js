//"use client";
import { useState } from "react";
import { Image, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { changeMessage } from "../Redux/Reducer/generalReducer";
import { returnHour, returnDate_ } from "../Helpers/utility";
import { clientController } from "../Controller/clientController";

export const useClientHooks = ({ initialForm, actionsButtons }) => {
	const [client, setClient] = useState(initialForm); //New client
	const [data, setData] = useState([]);
	const [errors, setErrors] = useState({});
	const [loading, setLoading] = useState(false);
	const [response, setResponse] = useState(null);
	const [sideWindows, setSideWindows] = useState(false);

	const count = useSelector((state) => state.message);
	const dispatch = useDispatch();

	const { getAll } = clientController();

	const columns = [
		{ field: "id", headerName: "ID", editable: false, minWidth: 25 },
		{
			field: "identification",
			headerName: "IDENTIFICATION",
			editable: false,
			minWidth: 130,
		},
		{
			field: "name",
			headerName: "NAME",
			editable: false,
			minWidth: 150,
		},
		{
			field: "address",
			headerName: "ADDRESS",
			editable: false,
			minWidth: 150,
		},
		{
			field: "phone",
			headerName: "PHONE",
			editable: false,
			minWidth: 100,
		},
		{
			field: "email",
			headerName: "EMAIL",
			editable: false,
			minWidth: 150,
		},
		{
			field: "status",
			headerName: "STATUS",
			editable: false,
			minWidth: 100,
			cellEditor: "agSelectCellEditor",
			cellEditorParams: {
				values: ["Active", "Inactive"],
			},
		},
		/*
		{
			field: "total",
			valueGetter: (params) => params.data.Email,
		},
		*/
		{
			field: "actions",
			headerName: "Actions",
			cellRenderer: (params) => {
				//actionsButtons(params.data)
				return (
					<>
						<div>
							<Button
								variant=""
								onClick={() => {
									//setShowModal({ value: true, data });
									alert("show alert edit");
								}}
							>
								<Image
									src="../../assets/icons/edit.svg"
									width="30"
									height="30"
									className="d-inline-block align-top"
									alt="Edit"
								/>
							</Button>
							<Button
								variant=""
								onClick={() => {
									//setShowModal({ value: true, data });
									alert("show alert delete");
								}}
							>
								<Image
									src="../../assets/icons/delete.svg"
									width="30"
									height="30"
									className="d-inline-block align-top"
									alt="Delete"
								/>
							</Button>
						</div>
					</>
				);
			},
		},
	];

	const handleChange = (e) => {
		const { name, value } = e.target;
		setClient({
			...client,
			[name]: value,
		});
	};

	const handleGetAll = async () => {
		setLoading(true);
		let data = await getAll();

		if (data.count > 0 || data.statusText === "Success") {
			setData(data.data);

			dispatch(
				changeMessage({
					active: true,
					title: "Getting data",
					msg: "Data was getting",
					variantColor: "success",
					hour: returnHour(),
					date: returnDate_(),
				}),
			);
		} else {
			dispatch(
				changeMessage({
					active: true,
					title: "Getting data",
					msg: "Data was not getting",
					variantColor: "error",
					hour: returnHour(),
					date: returnDate_(),
				}),
			);
		}
		setLoading(false);
	};

	const handleSave = () => {
		//Create a method to storage data
		dispatch(
			changeMessage({
				active: true,
				title: "Save Client",
				msg: "Your row was successfully saved",
				variantColor: "success",
				hour: returnHour(),
				date: returnDate_(),
			}),
		);

		handleSideWindows();
	};

	const handleModify = () => {
		alert("modify");
	};
	const handleDelete = () => {
		//Create a method to delete data
		dispatch(
			changeMessage({
				active: true,
				title: "Delete Client",
				msg: "Your row was deleted ",
				variantColor: "success",
				hour: returnHour(),
				date: returnDate_(),
			}),
		);
	};

	const handleSideWindows = () => {
		setSideWindows(!sideWindows);
	};

	return {
		data,
		columns,
		client,
		setClient,
		handleGetAll,
		handleSave,
		handleChange,
		handleModify,
		handleDelete,
		sideWindows,
		setSideWindows,
		handleSideWindows,
	};
};
