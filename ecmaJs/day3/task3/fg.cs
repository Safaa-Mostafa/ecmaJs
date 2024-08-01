namespace FirstProject
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Employee[] employees = new Employee[10];
            int index;
            char ch;
            int age;
            char overWrite;
            do
            {



                do
                {
                    do
                    {
                        Console.WriteLine("Please enter index (0-9):");
                        index = int.Parse(Console.ReadLine());
                    } while (index < 0 || index > 9);

                    if (index < employees.Length)
                    {
                        Console.WriteLine(" Do you want to overwrite? y/n");
                        overWrite = char.Parse(Console.ReadLine());
                    }
                    else
                    {
                        overWrite = 'y';
                    }

                } while (overWrite == 'n');




                do
                {


                    Console.WriteLine("Please Enter your ssn");
                    employees[index].ssn = int.Parse(Console.ReadLine());
                    Console.WriteLine("Please Enter your name");
                    employees[index].name = Console.ReadLine();

                    do
                    {
                        Console.WriteLine("Enter age");
                        age = int.Parse(Console.ReadLine());
                    } while (age < 18 || age > 60);
                    employees[index].age = age;

                    Console.WriteLine("Enter salary");
                    employees[index].salary = decimal.Parse(Console.ReadLine());

                    Console.WriteLine("Continue y or n");
                    ch = char.Parse(Console.ReadLine());
                } while (ch == 'y');
            
                Console.ReadKey();
            
    }
    }
}
}

