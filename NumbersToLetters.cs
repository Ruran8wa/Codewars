using System;
using System.Text;

public class Kata
{
    public static string Switcher(string[] x)
    {
        char[] alphabets = {
            'Z','Y','X','W','V','U','T','S','R','Q',
            'P','O','N','M','L','K','J','I','H','G',
            'F','E','D','C','B','A','!','?',' '
        };

        StringBuilder result = new StringBuilder();
        foreach (string num in x)
        {
            int index = Convert.ToInt32(num) - 1;
            result.Append(alphabets[index]);
        }
        
        return result.ToString().ToLower();
    }

    public static void Main(string[] args)
    {
        Kata.Switcher(new string[] { "24", "12", "23", "22", "4", "26", "9", "8" });
    }
}