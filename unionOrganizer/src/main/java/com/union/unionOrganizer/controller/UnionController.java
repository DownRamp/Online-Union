package com.union.unionOrganizer.controller;

import com.union.unionOrganizer.model.Job;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/union")
public class UnionController {
    // get all jobs
    @GetMapping("/")
    public List<Job> findAllJobs(){
        return null;
    }
    // add job

    // add job + area
    // add demands
    // get all jobs from an area
    // get all areas for a job
    // get all votes for a job
    // add complaints
    // create a strike
    // add self to strike
    // fetch strike
}
