package com.industryx0.financialmeltdownkata.controller;

import com.industryx0.financialmeltdownkata.domain.CustomerDetailsView;
import com.industryx0.financialmeltdownkata.service.CustomerDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import static org.springframework.http.MediaType.APPLICATION_JSON_UTF8_VALUE;

@RestController
@RequestMapping(path = "/customerDetails")
public class CustomerDetailsController {

    @Autowired
    CustomerDetailsService customerDetailsService;

    @GetMapping(produces = APPLICATION_JSON_UTF8_VALUE)
    public CustomerDetailsView getCustomerDetails() {
        return customerDetailsService.getCustomerDetails();
    }

    @PostMapping(produces = APPLICATION_JSON_UTF8_VALUE)
    public CustomerDetailsView updateCustomerDetails(@RequestBody CustomerDetailsView customerDetails) {
        return customerDetailsService.setCustomerDetails(customerDetails);
    }
}
