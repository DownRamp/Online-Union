package com.union.unionOrganizer.model;

import java.util.Objects;

public class Job {
    private String name;
    private String location;

    public Job(String name, String location) {
        this.name = name;
        this.location = location;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Job job)) return false;
        return name.equals(job.name) && location.equals(job.location);
    }

    @Override
    public int hashCode() {
        return Objects.hash(name, location);
    }

    @Override
    public String toString() {
        return "job{" +
                "name='" + name + '\'' +
                ", location='" + location + '\'' +
                '}';
    }
}
