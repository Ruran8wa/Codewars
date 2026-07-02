public static class Kata
{
    public static int Solution(int value)
    {
        int sum = 0;
        if(value < 0) return 0;
        for(int i=1; i < value; i++){
            if(i % 5 == 0 && i % 3 == 0){
                sum += i;
            }else if(i % 5 == 0){
                sum += i;
            }else if(i % 3 == 0){
                sum += i;
            }else{
                continue;
            }
        }
        return sum;
    }
}