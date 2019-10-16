package com.industryx0.financialmeltdownkata.service;

import com.industryx0.financialmeltdownkata.domain.FinancedItem;
import org.junit.Before;
import org.junit.Test;

import java.math.BigDecimal;
import java.util.Random;
import java.util.UUID;

import static org.junit.Assert.*;

public class FinancedItemServiceTest {
    private FinancedItemService financedItemService = new FinancedItemService();
    private Random rand = new Random();
    private FinancedItem financedItem;

    @Before
    public void setup() {
        financedItem = new FinancedItem();
        financedItem.setItemName(UUID.randomUUID().toString());
        financedItem.setPrice(new BigDecimal(this.randFloat(1.00F, 1000.00F)));
    }

    @Test
    public void shouldCreateFinancedItemAndAddToRepository() {
        FinancedItem updatedItem = financedItemService.postFinancedItem(financedItem);

        assertSame(updatedItem, financedItem);
        assertSame(financedItemService.getFinancedItems().get(0), financedItem);
    }

    @Test
    public void shouldAddIdToNewItemWithoutId() {
        FinancedItem updatedItem = financedItemService.postFinancedItem(financedItem);

        assertNotNull(updatedItem.getId());
    }

    @Test
    public void shouldUpdateItemIfItAlreadyExists() {
        FinancedItem createdFinancedItem = financedItemService.postFinancedItem(financedItem);

        FinancedItem financeItemToUpdate = new FinancedItem();
        financeItemToUpdate.setId(createdFinancedItem.getId());
        financeItemToUpdate.setItemName(UUID.randomUUID().toString());

        FinancedItem updatedFinancedItem = financedItemService.postFinancedItem(financeItemToUpdate);

        assertEquals(updatedFinancedItem.getId(), createdFinancedItem.getId());
    }

    private float randFloat(float min, float max) {
        return this.rand.nextFloat() * (max - min) + min;
    }
}