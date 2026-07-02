public static class Kata
{
    public static int Solution(int value)
    {
        int sum = 0;
        if(value < 0) return 0;
        for(int i=3; i < value; i++)
        {
            if (i % 5 == 0 && i % 3 == 0) sum += i;
        }
        return sum;
    }
}