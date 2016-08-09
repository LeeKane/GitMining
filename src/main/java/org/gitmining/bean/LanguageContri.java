package org.gitmining.bean;

/**
 * Created by mac on 16/6/8.
 */
public class LanguageContri {
private String language;
    private int min;
    private int q1;
    private int med;
    private int q3;
    private int max;
    public String getLanguage() {
        return language;
    }

    public int getMin() {
        return min;
    }

    public int getQ1() {
        return q1;
    }

    public int getMed() {
        return med;
    }

    public int getQ3() {
        return q3;
    }

    public int getMax() {
        return max;
    }
    public void setMax(int max) {
        this.max = max;
    }

    public void setLanguage(String language) {
        this.language = language;
    }

    public void setMin(int min) {
        this.min = min;
    }

    public void setQ1(int q1) {
        this.q1 = q1;
    }

    public void setMed(int med) {
        this.med = med;
    }

    public void setQ3(int q3) {
        this.q3 = q3;
    }
}
