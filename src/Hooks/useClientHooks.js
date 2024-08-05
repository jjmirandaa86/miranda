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
		{ field: "Id", headerName: "ID", editable: false },
		{
			field: "Identification",
			editable: true,
			cellEditor: "agSelectCellEditor",
		},
		{
			field: "Name",
			editable: true,
			cellEditor: "agSelectCellEditor",
		},
		{ field: "Address", editable: true, cellEditor: "agSelectCellEditor" },
		{ field: "Phone", editable: true, cellEditor: "agSelectCellEditor" },
		{ field: "Email", editable: true, cellEditor: "agSelectCellEditor" },
		{
			field: "State",
			editable: true,
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
									alert("show alert");
								}}
							>
								<Image
									src="assets/icons/delete.svg"
									width="30"
									height="30"
									className="d-inline-block align-top"
									alt="Delete row"
								/>
							</Button>
						</div>
						<div>
							<Button
								variant=""
								onClick={() => {
									//setShowModal({ value: true, data });
									alert("show alert");
								}}
							>
								<Image
									src="assets/icons/delete.svg"
									width="30"
									height="30"
									className="d-inline-block align-top"
									alt="Delete row"
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
		console.log(data.data);
		setData(data.data);
		setLoading(false);

		/*
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
					msg: "Data was getting",
					variantColor: "success",
					hour: returnHour(),
					date: returnDate_(),
				}),
			);
			
		}
*/
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

/*
{
			Id: 1,
			Identification: "0923308654",
			Name: "Jefferson Miranda",
			Address: "New York St",
			Phone: "0993277375",
			Email: "jefferson_miranda@hotmail.es",
			State: "A",
		},
		{
			Id: 2,
			Identification: "934287273",
			Name: "Justin Miranda",
			Address: "Ecuador",
			Phone: "099432423",
			Email: "justin_miranda@hotmail.es",
			State: "A",
		},
		{
			Id: 22,
			Identification: "23452345234",
			Name: "Dome Miranda",
			Address: "Ecuador",
			Phone: "099345345",
			Email: "dome_miranda@hotmail.es",
			State: "A",
		},
		{
			Id: 22,
			Identification: "23452345234",
			Name: "Dome Miranda",
			Address: "Ecuador",
			Phone: "099345345",
			Email: "dome_miranda@hotmail.es",
			State: "A",
		},
		{
			Id: 22,
			Identification: "23452345234",
			Name: "Dome Miranda",
			Address: "Ecuador",
			Phone: "099345345",
			Email: "dome_miranda@hotmail.es",
			State: "A",
		},
*/
