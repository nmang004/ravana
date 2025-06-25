import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase/client';
import { ContactSubmission } from '@/lib/supabase/types';

export async function POST(request: NextRequest) {
  try {
    const body: ContactSubmission = await request.json();
    
    // Validate required fields
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { success: false, error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { success: false, error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Check if Supabase is configured
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL === 'https://placeholder.supabase.co') {
      // Development mode - just log the submission
      console.log('Contact form submission (development mode):', {
        name: body.name.trim(),
        email: body.email.trim().toLowerCase(),
        company: body.company?.trim() || null,
        message: body.message.trim(),
        service: body.service || null,
      });
      
      return NextResponse.json({
        success: true,
        message: 'Contact form submitted successfully (development mode)',
        data: { id: 'dev-' + Date.now() }
      });
    }

    // Insert into Supabase
    const { data, error } = await supabase
      .from('contact_submissions')
      .insert([
        {
          name: body.name.trim(),
          email: body.email.trim().toLowerCase(),
          company: body.company?.trim() || null,
          message: body.message.trim(),
          service: body.service || null,
        }
      ])
      .select();

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json(
        { success: false, error: 'Failed to save submission' },
        { status: 500 }
      );
    }

    // TODO: Add email notification here (using service like Resend, SendGrid, etc.)
    // await sendNotificationEmail(body);

    return NextResponse.json({
      success: true,
      message: 'Contact form submitted successfully',
      data: data[0]
    });

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { message: 'Contact API endpoint is working' },
    { status: 200 }
  );
}