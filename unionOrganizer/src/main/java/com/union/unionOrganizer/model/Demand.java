package com.union.unionOrganizer.model;

import java.util.Objects;

public class Demand {
    private String name;
    private int votes;
    private int job_id;

    public Demand(String name, int votes, int job_id) {
        this.name = name;
        this.votes = votes;
        this.job_id = job_id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getVotes() {
        return votes;
    }

    public void setVotes(int votes) {
        this.votes = votes;
    }

    public int getJob_id() {
        return job_id;
    }

    public void setJob_id(int job_id) {
        this.job_id = job_id;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Demand demand)) return false;
        return votes == demand.votes && job_id == demand.job_id && name.equals(demand.name);
    }

    @Override
    public int hashCode() {
        return Objects.hash(name, votes, job_id);
    }

    @Override
    public String toString() {
        return "demand{" +
                "name='" + name + '\'' +
                ", votes=" + votes +
                ", job_id=" + job_id +
                '}';
    }
}
