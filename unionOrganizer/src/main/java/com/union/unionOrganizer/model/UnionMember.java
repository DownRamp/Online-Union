package com.union.unionOrganizer.model;

import java.util.Objects;

public class UnionMember {
    private String name;

    public void setJob_id(int job_id) {
        this.job_id = job_id;
    }

    private int job_id;

    public UnionMember(String name, int job_id) {
        this.name = name;
        this.job_id = job_id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof UnionMember that)) return false;
        return job_id == that.job_id && Objects.equals(name, that.name);
    }

    @Override
    public int hashCode() {
        return Objects.hash(name, job_id);
    }

    @Override
    public String toString() {
        return "unionMember{" +
                "name='" + name + '\'' +
                ", job_id=" + job_id +
                '}';
    }
}
