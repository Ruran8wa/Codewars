using System;

public static class Kata
{
    public static string Solution(string str) 
    {
        char[] strToChar = str.ToCharArray();
        Array.Reverse(strToChar);
        string result = new string(strToChar);
        return result;
    }
}