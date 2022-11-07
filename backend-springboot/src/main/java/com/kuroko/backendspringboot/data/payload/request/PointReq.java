package com.kuroko.backendspringboot.data.payload.request;

public class PointReq {
    private double point;

    public double getPoint() {
        return point;
    }

    public void setPoint(double point) {
        this.point = point;
    }

    public PointReq() {
    }

    public PointReq(double point) {
        this.point = point;
    }
    
    
}
