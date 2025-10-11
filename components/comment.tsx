"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import {
  MessageCircle,
  Send,
  User,
  Calendar,
  Copy,
  Edit2,
  Trash2
} from "lucide-react";
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";

interface Comment {
  id: string;
  name: string;
  content: string;
  created_at: string;
  password: string;
  is_secret: boolean;
}

interface CommentProps {
  language: "ko" | "en";
}

export function Comment({ language }: CommentProps) {
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [password, setPassword] = useState("");
  const [isSecret, setIsSecret] = useState(false);
  const [comments, setComments] = useState<Comment[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editContent, setEditContent] = useState("");
  const [unlockedSecrets, setUnlockedSecrets] = useState<Set<string>>(
    new Set()
  );
  const [isAdminMode, setIsAdminMode] = useState(false);

  useEffect(() => {
    fetchComments();
  }, []);

  const fetchComments = async () => {
    try {
      const { data, error } = await supabase
        .from("comments")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;

      if (data) {
        setComments(data);
      }
    } catch (error) {
      console.error("Error fetching comments:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !content.trim() || !password.trim()) return;

    setIsSubmitting(true);

    try {
      const { data, error } = await supabase
        .from("comments")
        .insert([{ name, content, password, is_secret: isSecret }])
        .select();

      if (error) throw error;

      if (data && data.length > 0) {
        setComments([data[0], ...comments]);
      }

      setName("");
      setContent("");
      setPassword("");
      setIsSecret(false);
    } catch (error: any) {
      console.error("Error submitting comment:", error);
      const errorMessage = error?.message || JSON.stringify(error);
      alert(
        language === "ko"
          ? `댓글 작성에 실패했습니다: ${errorMessage}`
          : `Failed to submit comment: ${errorMessage}`
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = async (id: string, commentPassword: string) => {
    const inputPassword = prompt(
      language === "ko" ? "비밀번호를 입력하세요:" : "Enter password:"
    );

    if (!inputPassword) return;

    if (inputPassword !== commentPassword) {
      alert(
        language === "ko"
          ? "비밀번호가 일치하지 않습니다."
          : "Password does not match."
      );
      return;
    }

    const confirmMessage =
      language === "ko"
        ? "정말 삭제하시겠습니까?"
        : "Are you sure you want to delete this comment?";

    if (!confirm(confirmMessage)) return;

    try {
      const { error } = await supabase.from("comments").delete().eq("id", id);

      if (error) throw error;

      setComments(comments.filter((comment) => comment.id !== id));
      alert(language === "ko" ? "삭제되었습니다" : "Deleted!");
    } catch (error) {
      console.error("Error deleting comment:", error);
      alert(
        language === "ko" ? "삭제에 실패했습니다." : "Failed to delete comment."
      );
    }
  };

  const handleEdit = async (id: string) => {
    if (!editContent.trim()) return;

    try {
      console.log("Updating comment:", id, "with content:", editContent);
      const { data, error } = await supabase
        .from("comments")
        .update({ content: editContent })
        .eq("id", id)
        .select();

      console.log("Update response:", { data, error });

      if (error) {
        console.error("Supabase error:", error);
        throw error;
      }

      if (data && data.length > 0) {
        setComments(
          comments.map((comment) => (comment.id === id ? data[0] : comment))
        );
        setEditingId(null);
        setEditContent("");
        alert(language === "ko" ? "수정되었습니다" : "Updated!");
      } else {
        console.error("No data returned from update");
        alert(
          language === "ko"
            ? "수정 결과를 받지 못했습니다."
            : "No update result received."
        );
      }
    } catch (error) {
      console.error("Error updating comment:", error);
      alert(
        language === "ko"
          ? `수정에 실패했습니다: ${error}`
          : `Failed to update comment: ${error}`
      );
    }
  };

  const startEdit = (comment: Comment) => {
    const inputPassword = prompt(
      language === "ko" ? "비밀번호를 입력하세요:" : "Enter password:"
    );

    if (!inputPassword) return;

    if (inputPassword !== comment.password) {
      alert(
        language === "ko"
          ? "비밀번호가 일치하지 않습니다."
          : "Password does not match."
      );
      return;
    }

    setEditingId(comment.id);
    setEditContent(comment.content);
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditContent("");
  };

  const toggleAdminMode = () => {
    if (!isAdminMode) {
      const adminPassword = prompt(
        language === "ko"
          ? "관리자 비밀번호를 입력하세요:"
          : "Enter admin password:"
      );

      const ADMIN_PASSWORD = "admin1234";

      if (adminPassword === ADMIN_PASSWORD) {
        setIsAdminMode(true);
        alert(
          language === "ko" ? "관리자 모드 활성화" : "Admin mode activated"
        );
      } else {
        alert(
          language === "ko"
            ? "비밀번호가 일치하지 않습니다."
            : "Password does not match."
        );
      }
    } else {
      setIsAdminMode(false);
      alert(
        language === "ko" ? "관리자 모드 비활성화" : "Admin mode deactivated"
      );
    }
  };

  const unlockSecret = (comment: Comment) => {
    const inputPassword = prompt(
      language === "ko"
        ? "비밀 댓글 비밀번호를 입력하세요:"
        : "Enter secret comment password:"
    );

    if (!inputPassword) return;

    if (inputPassword !== comment.password) {
      alert(
        language === "ko"
          ? "비밀번호가 일치하지 않습니다."
          : "Password does not match."
      );
      return;
    }

    setUnlockedSecrets(new Set([...unlockedSecrets, comment.id]));
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
          <div className="flex items-center justify-center gap-4 mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-white">
              & {language === "ko" ? "게스트" : "Guestbook"}
            </h2>
            <button
              onClick={toggleAdminMode}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
                isAdminMode
                  ? "bg-orange-500 hover:bg-orange-600 text-white"
                  : "bg-gray-600 hover:bg-gray-700 text-white"
              }`}
            >
              {isAdminMode
                ? language === "ko"
                  ? "👑 관리자"
                  : "👑 Admin"
                : language === "ko"
                ? "🔒 일반"
                : "🔒 Normal"}
            </button>
          </div>

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
                    className="bg-gray-50 border-gray-300 focus:border-teal-400 focus:bg-white transition-colors"
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
                    className="bg-gray-50 border-gray-300 focus:border-teal-400 focus:bg-white min-h-[120px] resize-none transition-colors"
                    required
                    maxLength={500}
                  />
                  <p className="text-xs text-muted-foreground mt-1 text-right">
                    {content.length}/500
                  </p>
                </div>
                <div>
                  <Input
                    type="password"
                    placeholder={
                      language === "ko"
                        ? "비밀번호 (수정/삭제 시 필요)"
                        : "Password (required for edit/delete)"
                    }
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="bg-gray-50 border-gray-300 focus:border-teal-400 focus:bg-white transition-colors"
                    required
                    maxLength={20}
                  />
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="isSecret"
                    checked={isSecret}
                    onChange={(e) => setIsSecret(e.target.checked)}
                    className="w-4 h-4 text-teal-500 border-gray-300 rounded focus:ring-teal-500"
                  />
                  <label
                    htmlFor="isSecret"
                    className="text-sm text-gray-700 cursor-pointer"
                  >
                    {language === "ko"
                      ? "비밀 댓글로 작성"
                      : "Write as secret comment"}
                  </label>
                </div>
                <Button
                  type="submit"
                  className="w-full bg-teal-500 hover:bg-teal-600"
                  disabled={
                    isSubmitting ||
                    !name.trim() ||
                    !content.trim() ||
                    !password.trim()
                  }
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
            {isLoading ? (
              <Card className="bg-white backdrop-blur-sm border-border">
                <CardContent className="py-12 text-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-500 mx-auto mb-4"></div>
                  <p className="text-muted-foreground">
                    {language === "ko"
                      ? "코멘트 불러오는 중..."
                      : "Loading comments..."}
                  </p>
                </CardContent>
              </Card>
            ) : comments.length === 0 ? (
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
                  className="bg-white border-border hover:border-teal-400 transition-all duration-300"
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

                        {editingId === comment.id ? (
                          <div className="space-y-2">
                            <Textarea
                              value={editContent}
                              onChange={(e) => setEditContent(e.target.value)}
                              className="bg-gray-50 border-gray-300 focus:border-teal-400 focus:bg-white min-h-[100px] resize-none transition-colors"
                              maxLength={500}
                            />
                            <div className="flex items-center gap-2">
                              <button
                                className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-medium text-white bg-teal-500 hover:bg-teal-600 rounded-md transition-colors duration-200"
                                onClick={() => handleEdit(comment.id)}
                              >
                                {language === "ko" ? "저장" : "Save"}
                              </button>
                              <button
                                className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors duration-200"
                                onClick={cancelEdit}
                              >
                                {language === "ko" ? "취소" : "Cancel"}
                              </button>
                            </div>
                          </div>
                        ) : (
                          <>
                            {comment.is_secret &&
                            !isAdminMode &&
                            !unlockedSecrets.has(comment.id) ? (
                              <>
                                <div className="bg-gray-100 p-4 rounded-md flex items-center justify-between mb-3">
                                  <div className="flex items-center gap-2">
                                    <span className="text-gray-600 text-sm">
                                      🔒{" "}
                                      {language === "ko"
                                        ? "비밀 댓글입니다"
                                        : "Secret comment"}
                                    </span>
                                  </div>
                                  <button
                                    className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-medium text-white bg-teal-500 hover:bg-teal-600 rounded-md transition-colors duration-200"
                                    onClick={() => unlockSecret(comment)}
                                  >
                                    {language === "ko" ? "보기" : "View"}
                                  </button>
                                </div>
                              </>
                            ) : (
                              <>
                                {comment.is_secret && (
                                  <div className="text-xs text-gray-500 mb-1 flex items-center gap-1">
                                    🔓{" "}
                                    {language === "ko"
                                      ? "비밀 댓글"
                                      : "Secret comment"}
                                  </div>
                                )}
                                <p className="text-muted-foreground whitespace-pre-wrap break-words mb-3">
                                  {comment.content}
                                </p>
                              </>
                            )}
                            {(!comment.is_secret ||
                              isAdminMode ||
                              unlockedSecrets.has(comment.id)) && (
                              <div className="flex items-center gap-2 mt-3">
                                <button
                                  className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors duration-200"
                                  onClick={() => {
                                    navigator.clipboard.writeText(
                                      comment.content
                                    );
                                    alert(
                                      language === "ko"
                                        ? "코멘트가 복사되었습니다!"
                                        : "Comment copied to clipboard!"
                                    );
                                  }}
                                >
                                  <Copy className="w-3 h-3" />
                                  {language === "ko" ? "복사" : "Copy"}
                                </button>
                                <button
                                  className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-medium text-blue-700 bg-blue-100 hover:bg-blue-200 rounded-md transition-colors duration-200"
                                  onClick={() => startEdit(comment)}
                                >
                                  <Edit2 className="w-3 h-3" />
                                  {language === "ko" ? "수정" : "Edit"}
                                </button>
                                <button
                                  className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-medium text-red-700 bg-red-100 hover:bg-red-200 rounded-md transition-colors duration-200"
                                  onClick={() =>
                                    handleDelete(comment.id, comment.password)
                                  }
                                >
                                  <Trash2 className="w-3 h-3" />
                                  {language === "ko" ? "삭제" : "Delete"}
                                </button>
                              </div>
                            )}
                          </>
                        )}
                      </div>
                      <div className="text-sm text-muted-foreground flex-shrink-0">
                        <div className="w-3 h-3 bg-teal-500 rounded-full animate-pulse"></div>
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
