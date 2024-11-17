import PropTypes from "prop-types";

const StatusDisplay = ({ status }) => {
  const statusColors = {
    "GAME OVER": "rgba(255, 90, 0,1)",
    "ALL CLEARED": "green",
  };

  const getStatusColor = (status) => statusColors[status] || "initial";

  return (
    <span className="status" style={{ color: getStatusColor(status) }}>
      {status}
    </span>
  );
};

StatusDisplay.propTypes = {
  status: PropTypes.string.isRequired,
};

export default StatusDisplay;
