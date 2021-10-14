import { Bar } from "react-chartjs-2";
import styled from "styled-components/macro";
import { UserData } from "../utils/types";

interface Props {
  rollingRetention: number | undefined;
  users: UserData[];
}

// лучше округлять. например, до большего
// и разместить столбцы гистограммы между интервалами,
// но уже пора спать

export function Metric(props: Props) {
  const intervals = calcIntervals(props.users);

  const labels = intervals.map((interval, i) => {
    if (i <= 1) {
      return `${i} week`;
    }
    return `${i} weeks`;
  });

  const data = {
    labels: labels,
    datasets: [
      {
        data: intervals,
        backgroundColor: ["rgba(54, 162, 235, 0.2)"],
        borderColor: ["rgba(54, 162, 235, 1)"],
        borderWidth: 1,
      },
    ],
  };

  if (props.rollingRetention === undefined) {
    return null;
  }

  return (
    <MetricContainer>
      <MetricTitle>
        Rolling Retention 7 day:{" "}
        {Number.isNaN(props.rollingRetention)
          ? "no data"
          : `${props.rollingRetention} %`}
      </MetricTitle>
      <Histogram>
        {props.users && <Bar data={data} options={options} />}
      </Histogram>
    </MetricContainer>
  );
}

const options = {
  plugins: {
    legend: { display: false },
  },
};

// todo: возможно добавить агрумент длительности интервалов
// todo: возможно добавить выбор интервала, для которого строится график
function calcIntervals(users: UserData[]) {
  let groups: number[] = [];

  users
    .filter((user) => !!user.dateRegistration && !!user.dateLastActivity)
    .forEach((user) => {
      const msInWeek = 604800000;
      const reg = new Date(user.dateRegistration);
      const lastAct = new Date(user.dateLastActivity);

      const period = Math.round((lastAct.getTime() - reg.getTime()) / msInWeek);

      if (!groups[period]) {
        groups[period] = 0;
      }

      groups[period]++;
    });

  return Array.from(groups); //убирает пропуски в массиве, чтоб не лишать график пропорциональности
}

const MetricContainer = styled.div``;

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
