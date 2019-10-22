package com.industryx0.financialmeltdownkata.service;

import com.industryx0.financialmeltdownkata.domain.CustomerDetailsView;
import org.springframework.stereotype.Service;

@Service
public class CustomerDetailsService {
    private CustomerDetailsView customerDetails;

    public CustomerDetailsView getCustomerDetails() {
        return this.customerDetails;
    }

    public CustomerDetailsView setCustomerDetails(CustomerDetailsView customerDetails) {
        this.customerDetails = customerDetails;
        return this.customerDetails;
    }
}
