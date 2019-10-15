package com.industryx0.financialmeltdownkata.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;

import static org.springframework.http.MediaType.APPLICATION_JSON_UTF8_VALUE;

@RestController
@RequestMapping(path = "/customerDetails")
public class CustomerDetailsController {

    public CustomerDetailsController() {}

    @PostMapping(produces = APPLICATION_JSON_UTF8_VALUE)
    public Object getCourses() {
        return new ArrayList<>();
    }
}
