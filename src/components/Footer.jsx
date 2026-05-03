export const Footer = () => {
    return (
        <footer className='py-12 px-4 bg-card relative border-t border-border mt-12 pt-8 flex flex-wrap justify-between items-center'>
            <p className='text-md text-muted-foreground'>
                &copy; {new Date().getFullYear()} DotLee, Studio. All rights reserved. Modified from <a 
                href="https://www.youtube.com/watch?v=ifOJ0R5UQOc" 
                target="_blank"> Beautiful-React-Tailwind-Portfolio. </a>
            </p>
        </footer>
    );
}