export default function ExpenseData() {
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };
  const today = new Date();
  const dateString = today.toLocaleDateString("en-US", options);

  return (
    <div id="expense-data">
      <div className="data">
        <div className="title">
          <h5>Food</h5>
          <h5 className="price">$100</h5>
        </div>
        <span>
          <h6>{dateString}</h6>
        </span>
      </div>

      <div className="data">
        <div className="title">
          <h5>Food</h5>
          <h5 className="price">$100</h5>
        </div>
        <span>
          <h6>{dateString}</h6>
        </span>
      </div>

      <div className="data">
        <div className="title">
          <h5>Food</h5>
          <h5 className="price">$100</h5>
        </div>
        <span>
          <h6>{dateString}</h6>
        </span>
      </div>

      <div className="data">
        <div className="title">
          <h5>Food</h5>
          <h5 className="price">$100</h5>
        </div>
        <span>
          <h6>{dateString}</h6>
        </span>
      </div>

      <div className="data">
        <div className="title">
          <h5>Food</h5>
          <h5 className="price">$100</h5>
        </div>
        <span>
          <h6>{dateString}</h6>
        </span>
      </div>

      <div className="data">
        <div className="title">
          <h5>Food</h5>
          <h5 className="price">$100</h5>
        </div>
        <span>
          <h6>{dateString}</h6>
        </span>
      </div>

      <div className="data">
        <div className="title">
          <h5>Food</h5>
          <h5 className="price">$100</h5>
        </div>
        <span>
          <h6>{dateString}</h6>
        </span>
      </div>

      <div className="data">
        <div className="title">
          <h5>Food</h5>
          <h5 className="price">$100</h5>
        </div>
        <span>
          <h6>{dateString}</h6>
        </span>
      </div>

      <div className="data">
        <div className="title">
          <h5>Food</h5>
          <h5 className="price">$100</h5>
        </div>
        <span>
          <h6>{dateString}</h6>
        </span>
      </div>

      <div className="data">
        <div className="title">
          <h5>Food</h5>
          <h5 className="price">$100</h5>
        </div>
        <span>
          <h6>{dateString}</h6>
        </span>
      </div>

      <div className="data">
        <div className="title">
          <h5>Food</h5>
          <h5 className="price">$100</h5>
        </div>
        <span>
          <h6>{dateString}</h6>
        </span>
      </div>

      <div className="data">
        <div className="title">
          <h5>Food</h5>
          <h5 className="price">$100</h5>
        </div>
        <span>
          <h6>{dateString}</h6>
        </span>
      </div>

      <div className="data">
        <div className="title">
          <h5>Food</h5>
          <h5 className="price">$100</h5>
        </div>
        <span>
          <h6>{dateString}</h6>
        </span>
      </div>
    </div>
  );
}
