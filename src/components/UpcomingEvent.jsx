import React from "react";
import "./UpcomingEvent.css";
import Button from "./Button";

function UpcomingEvent() {
  return (
    <section id="event" className="upcoming-event text-center">
      <div className="container py-5">
        <h3 className="section-title mb-3">Upcoming Event</h3>
        <p className="section-subtitle mb-5">
          Join us for an unforgettable evening of gourmet dining, music, and celebration!
        </p>

        <div className="event-card mx-auto p-4">
          <div className="countdown d-flex justify-content-center gap-3 mb-4">
            <div className="time-box">
              <span className="time">30</span>
              <small>Days</small>
            </div>
            <div className="time-box">
              <span className="time">24</span>
              <small>Hours</small>
            </div>
            <div className="time-box">
              <span className="time">60</span>
              <small>Mins</small>
            </div>
            <div className="time-box">
              <span className="time">80</span>
              <small>Secs</small>
            </div>
          </div>

          <Button value="Reserve Now" href="/reservation" />
        </div>
      </div>
    </section>
  );
}

export default UpcomingEvent;
