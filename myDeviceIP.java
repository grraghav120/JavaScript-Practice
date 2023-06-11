import java.io.*;
import java.net.*;
public class myDeviceIP{
    public static void main(String arg[]){
        InetAddress ip=null;
        try{
            ip=InetAddress.getLocalHost();
            System.out.println(ip);
        }catch(Exception e){
            System.out.println(e.getMessage());
        }
    }
}