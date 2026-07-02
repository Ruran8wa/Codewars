public class Ship
{
    public int Draft;
    public int Crew;
  
    public Ship(int draft, int crew)
    {
        Draft = draft;
        Crew = crew;
    }
  
    public bool IsWorthIt(){
        var total = Draft - (Crew * 1.5);
        return total >= 20 ? true : false;
    }
}