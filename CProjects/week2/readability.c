#import<stdio.h>
#import<cs50.h>
#import<math.h>

double getColeman_LiauIndex(string sentence, int stringLength);
int getStringLength(string sentence);

int main(void)
{
    string sentence = get_string("Enter a sentence:\n");
    int stringLength = getStringLength(sentence);
    double coleman_liauIndex = getColeman_LiauIndex(sentence, stringLength);

    if (coleman_liauIndex > 16)
    {
        printf("Grade 16+\n");
    }
    else if (coleman_liauIndex <= 16 && coleman_liauIndex >= 1)
    {
        int gradeLevel = round(coleman_liauIndex);
        printf("Grade %i\n", gradeLevel);
    }
    else
    {
        printf("Before Grade 1\n");
    }
}

double getColeman_LiauIndex(string sentence, int stringLength)
{
    int totalWords = 1, totalLetters = 0, totalSentences = 0;
    for (int i = 0; i < stringLength; i++)
    {
        if (sentence[i] == 32)
        {
            totalWords++;
        }
        else if ((sentence[i] >= 65 && sentence[i] <= 90) || (sentence[i] >= 97 && sentence[i] <= 122))
        {
            totalLetters++;
        }
        else if (sentence[i] == 46 || sentence[i] == 33 || sentence[i] == 63)
        {
            totalSentences++;
        }
    }
    return 5.88 * (totalLetters / (double) totalWords) - 29.6 * (totalSentences / (double) totalWords) - 15.8;
}

int getStringLength(string sentence)
{
    int count = 0;
    while (sentence[count] != 0)
    {
        count++;
    }
    return count;
}