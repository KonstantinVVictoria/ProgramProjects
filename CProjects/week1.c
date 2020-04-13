#include <stdio.h>
#include <cs50.h>

void print_card_type(long cardNumber, bool isValid, int cardNumberLength);
int get_length(long cardNumber);
int isolate_digit(long cardNumber, int i);
bool is_valid(long cardNumber, int cardNumberLength);

int main(void)
{
    long cardNumber;
    int cardNumberLength = 0, firstDigit;


    cardNumber = get_long("Enter Credit Card Number\n");
    cardNumberLength = get_length(cardNumber); 
    print_card_type(cardNumber, is_valid(cardNumber, cardNumberLength), cardNumberLength);

}

int get_length(long cardNumber)
{
    int cardNumberLength = 0;
    long place = 1;
    while (cardNumber / place >= 1)
    {
        cardNumberLength++;
        place *= 10;
    }
    
    return cardNumberLength;
}

int isolate_digit(long cardNumber, int i)
{
    long sigNumbers = 1;
    int isolatedDigit;
    for (int k = 1; k <= i; k++)
    {
        sigNumbers *= 10;
    }
    isolatedDigit = cardNumber % sigNumbers / (sigNumbers / 10);
    return isolatedDigit;

}

bool is_valid(long cardNumber, int cardNumberLength)
{
    int totalSum;
    int oddsPlaceSum = 0, evensPlaceSum = 0, doubledDig = 0, indivDig;

    for (int i = 1; i <= cardNumberLength; i++)
    {
        indivDig = isolate_digit(cardNumber, i);
        doubledDig = 2 * indivDig;    

        for (int j = 1; j <= get_length(doubledDig); j++)
        {
            if (i % 2 == 0)
            {                 
                oddsPlaceSum += isolate_digit(doubledDig, j);            
            } 
            else
            {
                evensPlaceSum += isolate_digit(indivDig, j);
            }
        }       
    }
    totalSum = oddsPlaceSum + evensPlaceSum;
    return totalSum % 10 == 0;
}

int get_first_two_digit(long cardNumber, int cardNumberLength)
{
    return isolate_digit(cardNumber, cardNumberLength) * 10 + isolate_digit(cardNumber, cardNumberLength - 1);
}

void print_card_type(long cardNumber, bool isValid, int cardNumberLength)
{
    int firstDig = isolate_digit(cardNumber, cardNumberLength);
    int firstTwoDig = isolate_digit(cardNumber, cardNumberLength) * 10 + isolate_digit(cardNumber, cardNumberLength - 1);
    if (isValid)
    {
        if ((firstTwoDig == 34 || firstTwoDig == 37) && cardNumberLength == 15)
        {
            printf("AMEX\n");
        }
        else if ((firstTwoDig <= 55 && firstTwoDig  >= 51) && cardNumberLength == 16)
        {
            printf("MASTERCARD\n");
        }
        else if (firstDig == 4 && (cardNumberLength == 16 || cardNumberLength == 13))
        {
            printf("VISA\n");
        }
        else 
        {
            printf("INVALID\n");
        }
    }
    else
    {
        printf("INVALID\n");
    }
}
