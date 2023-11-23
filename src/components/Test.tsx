import { IGoods } from "@models/IGoods";
import { useAddProductMutation, useGetGoodsQuery, useDeleteProductMutation } from "@services/goodsApi";
import { FC, useState } from "react";


// interface GoodsAppProps {
// 	// onClick: (e: React.MouseEvent) => void
// 	good: IGoods
// 	onChange: (e: React.ChangeEventHandler) => void
// }
// export interface MyComponentState {
// 	selectedValue: string; // Или любой другой тип, который вы используете
// }
// interface ITest {
// 	good: IGoods
// 	deleteProduct: (id: IGoods) => void
// }
const Test: FC = () => {
	const [limit, setLimit] = useState('')
	const [newProduct, setNewProduct] = useState('')
	// const [limit, setLimit] = useState<MyComponentState>({
	// 	selectedValue: ''
	// })
	const { data: goods, isLoading } = useGetGoodsQuery(limit);
	const [addProduct, { isError }] = useAddProductMutation()
	const [deleteProduct] = useDeleteProductMutation();

	const handleAddProduct = async () => {
		if (newProduct) {
			await addProduct({ name: newProduct } as IGoods).unwrap()
			setNewProduct('')
		}
	}
	const handleDeleteProduct = async (id: React.MouseEvent<HTMLLIElement> | number) => {
		await deleteProduct(id).unwrap()
	}
	const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setLimit(event.target.value)
	}
	// const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
	// 	setLimit({
	// 		selectedValue: event.target.value
	// 	})
	// }
	return (
		<div>
			<div className="">
				<input
					type="text"
					value={newProduct}
					onChange={(e) => setNewProduct(e.target.value)}
				/>
				<button onClick={handleAddProduct}>Create</button>
			</div>
			<div className="">
				<select value={limit} onChange={handleChange}>
					<option value="">all</option>
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
				</select>
			</div>
			{isLoading && <h1>Loading....</h1>}
			{goods?.map(item => (
				<li key={item.id} onClick={() => handleDeleteProduct(item.id)}>{item.name}</li>
			))}
		</div>
	)
}

export default Test
