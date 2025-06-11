import java.util.Scanner;

public class index {
    public static void main(String[] args) {
        Scanner sc = new Scanner (System.in);
        System.out.println("Enter your name : " + sc.nextInt());
        int a = 5;
        if (a > 0) {
            System.out.println("Positive");
        }
        else{
            System.out.println("Negative");
        }
    }
}
