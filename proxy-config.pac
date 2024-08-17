function FindProxyForURL(url, host) {
    // Định tuyến tất cả lưu lượng qua proxy ở địa chỉ IP 192.168.1.1 và cổng 8080
    return "PROXY 192.168.1.13:8888";
}
