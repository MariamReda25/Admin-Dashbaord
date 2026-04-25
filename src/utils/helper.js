export const formatCurrency = function (value) {
  return new Intl.NumberFormat("en-Us", {
    style: "currency",
    currency: "USD",
  }).format(value);
};

export const randomNumber = function () {
  return Math.random();
};

export const formatDate = function (date) {
  return new Intl.DateTimeFormat("en-us", {
    day: "numeric",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(date));
};

export const formatNumber = function (value) {
  return new Intl.NumberFormat("en-Us").format(value);
};
