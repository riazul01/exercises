#include <iostream>

using namespace std;

int main()
{
    int num1, num2;
    int *ptr1, *ptr2;

    ptr1 = &num1;
    ptr2 = &num2;

    cout << "Enter first number >>> ";
    cin >> num1;

    cout << "Enter second number >>> ";
    cin >> num2;

    *ptr1 = *ptr1 + *ptr2;
    *ptr2 = *ptr1 - *ptr2;
    *ptr1 = *ptr1 - *ptr2;

    cout << endl;

    cout << "First number: " << num1 << endl;
    cout << "Second number: " << num2 << endl;

    return 0;
}
