import noTransactionGif from "assets/images/no-transaction.gif";

const NoTransaction = () => {
	return (
		<div className="empty-transaction">
			<div className="content">
				<img src={noTransactionGif} alt="empty" />
				<h3 style={{ color: "#C6C6C6" }} className="text-xs text-bolt">
					You have no transaction with us yet. Why?
				</h3>
			</div>
		</div>
	);
};

export default NoTransaction;
