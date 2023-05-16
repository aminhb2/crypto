import React from "react";

const Table = ({coins}) => {
  return (
    <table className=" table ">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Coin</th>
          <th scope="col">Symbol</th>
          <th scope="col">Price</th>
          <th scope="col">Market cap</th>
          <th scope="col">24h</th>
          <th scope="col">Market Cap Rank</th>
        </tr>
      </thead>
      <tbody>
        {coins.map((coin, index) => {
          return (
            <tr>
              <th scope="row">{index + 1}</th>
              <td className="d-flex ">
                <img
                  style={{ width: "30px", height: "30px" }}
                  className="me-1"
                  src={coin.image}
                  alt=""
                />
                <p>{coin.name}</p>
              </td>
              <td>{coin.symbol.toUpperCase()}</td>
              <td>${coin.current_price.toLocaleString()}</td>
              <td>${coin.market_cap.toLocaleString()}</td>
              <td>{coin.price_change_percentage_24h}%</td>
              <td>{coin.market_cap_rank}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
