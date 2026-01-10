import { NextRequest, NextResponse } from 'next/server';
import { getClasses, addClass, updateClass, deleteClass } from '@/lib/dataStore';

export async function GET() {
  try {
    const classes = getClasses();
    return NextResponse.json(classes);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch classes' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    const newClass = addClass(data);
    return NextResponse.json(newClass, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create class' }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    const { id, ...updates } = await request.json();
    const updated = updateClass(id, updates);
    if (!updated) {
      return NextResponse.json({ error: 'Class not found' }, { status: 404 });
    }
    return NextResponse.json(updated);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update class' }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    if (!id) {
      return NextResponse.json({ error: 'ID required' }, { status: 400 });
    }
    deleteClass(parseInt(id));
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete class' }, { status: 500 });
  }
}
