import Link from "next/link";

import { useCarts } from "@root/hooks";

import { calcPriceDiscount } from "@root/utils";

import { Button } from "react-bootstrap";
import { ProductQuantity } from "@root/components/productquantity";

import { ColorsVariant } from "@root/components/productvariants/colorsvariant";
import { SizesVariant } from "@root/components/productvariants/sizesvariant";
import ModalFormOrder from "./modalformorder/ModalformOrder";

import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import CircularProgress from "@mui/material/CircularProgress";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";

import style from "./productdetails.module.scss";

const ProductDetails = ({ productDetails }) => {
	const { addCartData, setProductVariants, productVariants, isLoading } = useCarts(productDetails);

	const handleChooseColor = (event) => {
		const chossenColorValue = event.target.getAttribute("value");
		setProductVariants({ ...productVariants, color: chossenColorValue });
	};

	const handleChooseSize = (event) => {
		const chossenSizeValue = event.target.getAttribute("value");
		setProductVariants({ ...productVariants, size: chossenSizeValue });
	};

	const handleAddtoCart = () => addCartData();

	const handleProductIncrement = () => {
		setProductVariants({
			...productVariants,
			quantity: productVariants.quantity + 1,
		});
	};

	const handleProductDecrement = () => {
		productVariants.quantity > 1 &&
			setProductVariants({
				...productVariants,
				quantity: productVariants.quantity - 1,
			});
	};

	const renderPrice = () => {
		if (productDetails?.price_discount) {
			return (
				<>
					<div className={style.price}>{Number(productDetails?.price_discount).toLocaleString()} جنية</div>
					<div className={style.oldPrice}>{Number(productDetails?.price).toLocaleString()} جنية</div>
				</>
			);
		}
		return <div className={style.price}>{Number(productDetails?.price).toLocaleString()} جنية</div>;
	};

	return (
		<div className={style.productDetailsWrapper}>
			<div className={style.productName}>{productDetails?.product_name}</div>
			<div className={`${style.priceWrapper} d-flex align-items-center`}>
				{renderPrice()}
				{productDetails?.price_discount && <div className={style.discountPercentage}>خصم {calcPriceDiscount(productDetails?.price, productDetails?.price_discount)}%</div>}
			</div>
			{!!productDetails.short_description && <div className={style.shortDescription}>{productDetails?.short_description}</div>}

			{!!productDetails?.colors?.length && (
				<div className={`${style.productVariantsWrapper} mb-3 mt-3`}>
					<label className={style.labelText}>اختر لون المنتج</label>
					<div>
						<ColorsVariant className={style.variants} colors={productDetails?.colors} handleChooseColor={handleChooseColor} choosenColor={productVariants?.color} />
					</div>
				</div>
			)}
			{!!productDetails?.sizes?.length && (
				<div className={`${style.productVariantsWrapper} mb-3 mt-3`}>
					<label className={style.labelText}>اختر مقاس المنتج</label>
					<div>
						<SizesVariant className={`${style.variants} ${style.sizeVariant}`} sizes={productDetails?.sizes} handleChooseSize={handleChooseSize} choosenSize={productVariants?.size} />
					</div>
				</div>
			)}
			<ul className={`${style.listDetails} list-unstyled`}>
				{!!productDetails?.category_id && (
					<li className={style.item}>
						<span>القسم: </span>
						<Link href={`/categoryproducts/${productDetails?.category?.cat_slug}`}>{productDetails?.category?.cat_name}</Link>
					</li>
				)}
				{!!productDetails?.brand && (
					<li className={style.item}>
						<span>البراند: </span>
						<Link href="#">{productDetails?.brand?.brand_name}</Link>
					</li>
				)}
			</ul>
			<div className={`${style.addCartDetails} d-flex flex-wrap gap-3 mt-3`}>
				<div>
					<ProductQuantity quantity={productVariants.quantity} handleProductIncrement={handleProductIncrement} handleProductDecrement={handleProductDecrement} />
				</div>
				<div className="flex-grow-1" style={{ position: "relative" }}>
					<Button className={`${style.addCartbtn}`} onClick={handleAddtoCart}>
						اضافة الي السلة
						{isLoading ? <CircularProgress className={style.iconLoading} size={14} /> : <ShoppingCartOutlinedIcon fontSize="small" style={{ fontSize: "16px" }} />}
					</Button>
				</div>
				<div className="flex-grow-1">
					<ModalFormOrder
						quantity={productVariants.quantity}
						product={productDetails}
						renderButton={(setOpenModal) => (
							<Button className={style.buyNow} onClick={() => setOpenModal(true)}>
								اشتري الان
								<ElectricBoltIcon fontSize="small" />
							</Button>
						)}
					/>
				</div>
			</div>
		</div>
	);
};
export default ProductDetails;
