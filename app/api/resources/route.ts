import { NextRequest, NextResponse } from 'next/server';
import { getResources, addResource, deleteResource } from '@/lib/dataStore';

export async function GET() {
  try {
    const resources = getResources();
    return NextResponse.json(resources);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch resources' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    const newResource = addResource(data);
    return NextResponse.json(newResource, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create resource' }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    if (!id) {
      return NextResponse.json({ error: 'ID required' }, { status: 400 });
    }
    deleteResource(id);
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete resource' }, { status: 500 });
  }
}
