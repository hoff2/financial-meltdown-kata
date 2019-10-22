package com.industryx0.financialmeltdownkata.service;

import com.industryx0.financialmeltdownkata.domain.CustomerDetailsView;
import org.junit.Test;

import java.util.UUID;

import static org.junit.Assert.*;

public class CustomerDetailsServiceTest {
    private CustomerDetailsService customerDetailsService = new CustomerDetailsService();

    @Test
    public void shouldStoreCustomerDetailsAndReturnItLater() {
        CustomerDetailsView expectedCustomerDetails = new CustomerDetailsView();
        expectedCustomerDetails.setFirstName(UUID.randomUUID().toString());
        expectedCustomerDetails.setLastName(UUID.randomUUID().toString());

        customerDetailsService.setCustomerDetails(expectedCustomerDetails);

        assertEquals(customerDetailsService.getCustomerDetails(), expectedCustomerDetails);
    }
}