import { ChartOptions } from "chart.js";
import { Bar } from "react-chartjs-2";
import styled from "styled-components/macro";
import { UserData } from "../utils/types";

interface Props {
  rollingRetention: number | undefined;
  users: UserData[];
}

export function Metric(props: Props) {
  const intervals = calcIntervals(props.users);

  const labels = intervals.map((interval, i) => {
    return `from ${i} to ${i + 1}`;
  });

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Quantity of users",
        data: intervals,
        backgroundColor: ["rgba(74, 157, 255, 0.2)"],
        borderColor: ["rgba(74, 157, 255, 0.8)"],
        borderWidth: 1,
      },
    ],
  };

  const options: ChartOptions = {
    plugins: {
      legend: { display: false },
    },
    scales: {
      y: {
        title: {
          display: true,
          text: "Quantity of users",
          color: "#4A9DFF",
        },
        ticks: {
          stepSize: 1,
        },
      },
      x: {
        title: {
          display: true,
          text: "Weeks",
          color: "#4A9DFF",
        },
      },
    },
  };

  if (props.rollingRetention === undefined) {
    return null;
  }

  return (
    <div className="MetricContainer">
      <MetricTitle>
        Rolling Retention 7 day:{" "}
        {Number.isNaN(props.rollingRetention)
          ? "no data"
          : `${props.rollingRetention} %`}
      </MetricTitle>
      <Histogram>
        {props.users && <Bar data={data} options={options} />}
      </Histogram>
    </div>
  );
}

// для большего количества данных:
// todo: возможно добавить выбор интервалов
// todo: возможно добавить выбор диапазона, для которого строится график
function calcIntervals(users: UserData[]) {
  let groups: number[] = [];

  users
    .filter((user) => !!user.dateRegistration && !!user.dateLastActivity)
    .forEach((user) => {
      const msInWeek = 604800000;
      const reg = new Date(user.dateRegistration);
      const lastAct = new Date(user.dateLastActivity);

      const period = Math.floor((lastAct.getTime() - reg.getTime()) / msInWeek);

      if (!groups[period]) {
        groups[period] = 0;
      }

      groups[period]++;
    });

  return Array.from(groups); //убирает пропуски в массиве, чтоб не лишать график пропорциональности
}

const MetricTitle = styled.h3`
  font-size: 17px;
  line-height: 20px;
  font-weight: 400;
  color: #3c5aa8;
  text-transform: uppercase;
  text-align: left;
  opacity: 0.6;
  margin: 40px 0 15px 0;
`;

const Histogram = styled.div``;
