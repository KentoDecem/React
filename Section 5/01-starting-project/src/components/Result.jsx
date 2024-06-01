import { calculateInvestmentResults, formatter } from "../util/investment";

function Result({ values }) {
  let result = calculateInvestmentResults(values);

  if (result.length === 0)
    return <p style={{ textAlign: "center" }}>fill all the inputs please</p>;
  else
    return (
      <table id="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {result.map((item, idx) => {
            let totalInvesment = item.interest;
            if (idx > 0) {
              for (let i = 0; i < idx; i++) {
                totalInvesment += result[i].interest;
              }
            }
            const investedCapital = item.valueEndOfYear - totalInvesment;

            return (
              <tr key={idx}>
                <td>{item.year}</td>
                <td>{formatter.format(item.valueEndOfYear)}</td>
                <td>{formatter.format(item.interest)}</td>
                <td>{formatter.format(totalInvesment)}</td>
                <td>{formatter.format(investedCapital)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
}

export default Result;
