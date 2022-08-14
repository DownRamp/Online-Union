package com.union.unionOrganizer.model;

import java.time.LocalDateTime;
import java.util.Objects;

public class Strike {
    private int job_id;
    private String reason;
    private LocalDateTime date;
    private int attendies;


    public Strike(int job_id, String reason, LocalDateTime date, int attendies) {
        this.job_id = job_id;
        this.reason = reason;
        this.date = date;
        this.attendies = attendies;
    }

    public int getJob_id() {
        return job_id;
    }

    public void setJob_id(int job_id) {
        this.job_id = job_id;
    }

    public String getReason() {
        return reason;
    }

    public void setReason(String reason) {
        this.reason = reason;
    }

    public LocalDateTime getDate() {
        return date;
    }

    public void setDate(LocalDateTime date) {
        this.date = date;
    }

    public int getAttendies() {
        return attendies;
    }

    public void setAttendies(int attendies) {
        this.attendies = attendies;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Strike strike)) return false;
        return job_id == strike.job_id && attendies == strike.attendies && reason.equals(strike.reason) && date.equals(strike.date);
    }

    @Override
    public int hashCode() {
        return Objects.hash(job_id, reason, date, attendies);
    }

    @Override
    public String toString() {
        return "strike{" +
                "job_id=" + job_id +
                ", reason='" + reason + '\'' +
                ", date=" + date +
                ", attendies=" + attendies +
                '}';
    }
}
