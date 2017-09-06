import java.util.Scanner;

public class DemoMetaphone3
{
	public static void main(String[] args)
	{
		// example code

		Scanner kb= new Scanner(System.in);
		Metaphone3 m3 = new Metaphone3();
		String word,badword;

		m3.SetEncodeVowels(true);
		//m3.SetEncodeExact(true);

		System.out.print("Enter word: ");
		word= kb.nextLine();

		System.out.print("Enter misspelled word: ");
		badword= kb.nextLine();

		m3.SetWord(word);
		m3.Encode();
		System.out.println(word+" => "+m3.GetMetaph());

		m3.SetWord(badword);
		m3.Encode();
		System.out.println(badword+" => "+m3.GetMetaph());

	}
}
