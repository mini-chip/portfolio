"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { MessageCircle, Send, User, Calendar } from "lucide-react";
import { useState } from "react";

interface Comment {
  id: string;
  name: string;
  content: string;
  created_at: string;
}

interface CommentProps {
  language: "ko" | "en";
}

export function Comment({ language }: CommentProps) {
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [comments, setComments] = useState<Comment[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !content.trim()) return;

    setIsSubmitting(true);

    // TODO: Supabase ��
    // const { data, error } = await supabase
    //   .from('comments')
    //   .insert([{ name, content }])
    //   .select()

    const newComment: Comment = {
      id: Date.now().toString(),
      name,
      content,
      created_at: new Date().toISOString()
    };
    setComments([newComment, ...comments]);

    setName("");
    setContent("");
    setIsSubmitting(false);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat(language === "ko" ? "ko-KR" : "en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    }).format(date);
  };

  return (
    <section id="comment" className="py-20 relative z-10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white">
            & {language === "ko" ? "게스트" : "Guestbook"}
          </h2>

          <Card className="mb-8 bg-white backdrop-blur-sm border-border">
            <CardHeader>
              <CardTitle className="text-xl text-gray-800 flex items-center gap-2">
                <MessageCircle className="w-5 h-5" />
                {language === "ko" ? "" : "Leave a message"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    placeholder={
                      language === "ko" ? "닉네임" : "NickName (required)"
                    }
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="bg-white border-gray-300 focus:border-teal-400"
                    required
                    maxLength={20}
                  />
                </div>
                <div>
                  <Textarea
                    placeholder={
                      language === "ko"
                        ? "코멘트를 남겨주세요!"
                        : "Enter your message (required)"
                    }
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    className="bg-white border-gray-300 focus:border-teal-400 min-h-[120px] resize-none"
                    required
                    maxLength={500}
                  />
                  <p className="text-xs text-muted-foreground mt-1 text-right">
                    {content.length}/500
                  </p>
                </div>
                <Button
                  type="submit"
                  className="w-full bg-teal-500 hover:bg-teal-600"
                  disabled={isSubmitting || !name.trim() || !content.trim()}
                >
                  <Send className="w-4 h-4 mr-2" />
                  {isSubmitting
                    ? language === "ko"
                      ? "코멘트 날라가는 중.."
                      : "Sending..."
                    : language === "ko"
                    ? "확인"
                    : "Submit"}
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-4">
            {comments.length === 0 ? (
              <Card className="bg-white/80 backdrop-blur-sm border-border">
                <CardContent className="py-12 text-center">
                  <MessageCircle className="w-12 h-12 mx-auto mb-4 text-gray-400" />
                  <p className="text-muted-foreground">
                    {language === "ko"
                      ? "첫 코멘트를 남겨주세요!"
                      : "Be the first to leave a message!"}
                  </p>
                </CardContent>
              </Card>
            ) : (
              comments.map((comment) => (
                <Card
                  key={comment.id}
                  className="bg-white/80 backdrop-blur-sm border-border hover:border-teal-400 transition-all duration-300"
                >
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0">
                        <User className="w-5 h-5 text-teal-600" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-2">
                          <p className="font-semibold text-gray-800">
                            {comment.name}
                          </p>
                          <div className="flex items-center gap-1 text-xs text-muted-foreground">
                            <Calendar className="w-3 h-3" />
                            <span>{formatDate(comment.created_at)}</span>
                          </div>
                        </div>
                        <p className="text-muted-foreground whitespace-pre-wrap break-words">
                          {comment.content}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
