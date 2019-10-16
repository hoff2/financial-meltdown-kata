package com.industryx0.financialmeltdownkata.service;

import com.industryx0.financialmeltdownkata.domain.FinancedItem;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.UUID;

@Service
public class FinancedItemService {
    private HashMap<String, FinancedItem> financedItems = new HashMap<>();

    public FinancedItem postFinancedItem(FinancedItem financedItem) {
        if (financedItem.getId() == null || !financedItems.containsKey(financedItem.getId())) {
            String id = UUID.randomUUID().toString();
            financedItem.setId(id);
        }
        financedItems.put(financedItem.getId(), financedItem);
        return financedItem;
    }

    public ArrayList<FinancedItem> getFinancedItems(){
        return new ArrayList(financedItems.values());
    }
}
