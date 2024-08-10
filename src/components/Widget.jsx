import React, { useState } from 'react'
import { Button } from './ui/button'
import { Label } from './ui/label'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'

const Widget = () => {
    const [rating, setRating] = useState(0)
    const [submitted, setSubmitted] = useState(false)

    const submit = (e) => {
        e.preventDefault()
        const form = e.target
        const data = {
            name: form.name.value,
            email: form.email.value,
            feedback: form.feedback.value,
            rating
        }
        setSubmitted(true)
        console.log(data)
    }

    return (
        <div className="widget fixed bottom-4 right-4 z-50">
            <Popover>
                <PopoverTrigger asChild>
                    <Button className="rounded-full shadow-lg hover:scale-105 transition-all duration-200">
                        <MessageCircleIcon className='w-5 h-5 mr-0.5' />
                        FeedBack
                    </Button>
                </PopoverTrigger>
                <PopoverContent className='widget rounded-lg bg-card p-4 shadow-lg w-full max-w-md'>
                    {submitted ? (
                        <div className="flex flex-col items-center justify-center">
                            <h3 className='text-lg font-bold mb-2'>Thank you for your feedback!</h3>
                            <p className='text-sm text-muted-foreground'>We appreciate you taking the time to give us feedback.</p>
                        </div>
                    ) : (
                        <>
                            <h3 className='text-lg font-bold mb-2'>Send us your feedback!</h3>
                            <form className='space-y-4' onSubmit={submit}>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="name">Name</Label>
                                        <Input
                                            id="name"
                                            placeholder="Enter your name"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="email">Email</Label>
                                        <Input
                                            id="email"
                                            type="email"
                                            placeholder="Enter your email"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="feedback">Feedback</Label>
                                    <Textarea
                                        id="feedback"
                                        placeholder="Tell us what you think"
                                        className="min-h-[120px]"
                                    />
                                </div>

                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-2">
                                        {[...Array(5).keys()].map((_, index) => (
                                            <StarIcon
                                                key={index}
                                                className={`w-6 h-6 cursor-pointer ${index < rating ? 'fill-primary' : 'fill-muted stroke-muted-foreground'}`}
                                                onClick={() => setRating(index + 1)}
                                            />
                                        ))}
                                    </div>

                                    <Button type="submit">Submit</Button>
                                </div>
                            </form>
                        </>
                    )}
                </PopoverContent>
            </Popover>
        </div>
    )
}

export default Widget

function StarIcon(props) {
    return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
}

function MessageCircleIcon(props) {
    return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>
}