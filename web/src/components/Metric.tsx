import { Bar } from "react-chartjs-2";
import styled from "styled-components/macro";

interface Props {
  rollingRetention: number | undefined;
  groupedTimeIntervals: number[] | undefined;
}

export function Metric(props: Props) {
  const data = {
    labels: [
      "1 day",
      "up to 1 week",
      "up to 2 weeks",
      "up to 3 weeks",
      "up to 4 weeks",
      "4 weeks and more",
    ],
    datasets: [
      {
        label: "# of Votes",
        data: props.groupedTimeIntervals!,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <MetricContainer>
      <MetricTitle>
        Rolling Retention 7 day: {props.rollingRetention}%
      </MetricTitle>
      <Histogram>
        {props.groupedTimeIntervals && <Bar data={data} options={options} />}
      </Histogram>
    </MetricContainer>
  );
}

const options = {
  plugins: {
    legend: { display: false },
  },
};

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
