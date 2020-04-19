#import <stdio.h>
#import <cs50.h>
#import <string.h>

string capitalize(string aString);
bool validate(string aString);

int main(int argsN, string codex[])
{
    if (argsN == 2 && validate(codex[1]))
    {
        string capitalizedCodex = capitalize(codex[1]);
        if (strlen(codex[1]) == 26)
        {
            string plaintext = get_string("plaintext: ");
            string ciphertext = plaintext;
            for (int i = 0; i < strlen(plaintext); i++)
            {
                char letter = plaintext[i];

                if (letter >= 65 && letter <= 90)
                {
                    ciphertext[i] = (char)capitalizedCodex[letter - 65];
                }
                else if (letter >= 97 && letter <= 122)
                {
                    ciphertext[i] = (char)(capitalizedCodex[letter - (65 + 32)] + 32);
                }
                else
                {
                    ciphertext[i] = letter;
                }
            }
            printf("ciphertext: %s\n", ciphertext);
        }

        else if (strlen(codex[1]) < 26 || strlen(codex[1]) > 26)
        {
            printf("%s", "Key must contain 26 characters.\n");
            return 1;
        }

    }

    else
    {
        return 1;
    }
}

bool validate(string aString)
{
    for (int i = 0; i < strlen(aString); i++)
    {

        if (!((aString[i] >= 65 && aString[i] <= 90) || (aString[i] >= 97 && (int) aString[i] <= 122)))
        {
            return false;
        }

        for (int j = i + 1; j < strlen(aString); j++)
        {

            if (aString[i] == aString [j])
            {
                return false;
            }

        }


    }
    return true;
}

string capitalize(string aString)
{

    for (int i = 0; i < strlen(aString); i++)
    {
        if ((aString[i] >= 97 && (int) aString[i] <= 122))
        {
            aString[i] -= 32;
        }
    }
    return aString;
}