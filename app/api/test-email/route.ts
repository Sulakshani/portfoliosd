import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ 
    message: 'API is working!',
    emailUser: process.env.EMAIL_USER ? 'Set' : 'Not set',
    emailPass: process.env.EMAIL_PASS ? 'Set' : 'Not set'
  });
}

export async function POST(request: NextRequest) {
  try {
    const { name, email, mobile, message } = await request.json();
    
    console.log('Received form data:', { name, email, mobile, message });
    
    // Check environment variables
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      return NextResponse.json(
        { error: 'Email credentials not configured. Please check your .env.local file.' },
        { status: 500 }
      );
    }

    // For now, just return success to test the connection
    return NextResponse.json(
      { 
        message: 'Test successful! Environment variables are set.',
        received: { name, email, mobile, message }
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error in test API:', error);
    return NextResponse.json(
      { error: 'Server error: ' + error },
      { status: 500 }
    );
  }
}