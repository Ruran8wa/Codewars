using System;

public class RomanDecode
{
    public static int Solution(string num)
    {
        Dictionary<char, int> map = new Dictionary<char, int>()
        {
            { 'I', 1 },
            { 'V', 5 },
            { 'X', 10 },
            { 'L', 50 },
            { 'C', 100 },
            { 'D', 500 },
            { 'M', 1000 }
        };

        int result = 0;

        for (int i = 0; i < num.Length; i++)
        {
            int current = map[num[i]];
            if(i < num.Length - 1 && current < map[num[i + 1]])
            {
                result -= current;
            }
            else
            {
                result += current;
            }
        }

        return result;
    }

    public static void Main(string[] args)
    {
        RomanDecode.Solution("CD");
    }
}