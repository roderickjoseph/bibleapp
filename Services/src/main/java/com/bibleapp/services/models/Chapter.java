package com.bibleapp.services.models;

import java.util.List;

public class Chapter {

    private int id;
    private List<Verse> verses;

    public List<Verse> getVerses() {
        return verses;
    }

    public void setVerses(List<Verse> verses) {
        this.verses = verses;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }
}
